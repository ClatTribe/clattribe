"use client";
import { useEffect, useState } from "react";
import { gkSupabase } from "./gk-supabase";

export interface AccessStatus {
  loading: boolean;
  email: string | null;
  /** True if signed-in OR if anon (treated as no access) */
  hasPortal: boolean;
  hasMocks: boolean;
  isInTrial: boolean;
  trialEndsAt: Date | null;
  portalExpiresOn: Date | null;
}

const INITIAL: AccessStatus = {
  loading: true,
  email: null,
  hasPortal: false,
  hasMocks: false,
  isInTrial: false,
  trialEndsAt: null,
  portalExpiresOn: null,
};

/**
 * Reads the current user's access status from Supabase.
 * - Calls auth.getUser() to find the email.
 * - Calls public.get_my_access(email) RPC for trial + paid status.
 *
 * Returns `loading: true` until both calls complete.
 * If user is not signed in, returns all-false.
 */
export function useAccess(): AccessStatus {
  const [state, setState] = useState<AccessStatus>(INITIAL);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const { data: userData } = await gkSupabase.auth.getUser();
        const email = userData?.user?.email ?? null;

        if (!email) {
          if (!cancelled) {
            setState({ ...INITIAL, loading: false });
          }
          return;
        }

        const { data, error } = await gkSupabase.rpc("get_my_access", {
          p_email: email,
        });

        if (cancelled) return;

        if (error || !data || data.length === 0) {
          setState({
            ...INITIAL,
            loading: false,
            email,
          });
          return;
        }

        const row = data[0];
        setState({
          loading: false,
          email,
          hasPortal: !!row.has_portal,
          hasMocks: !!row.has_mocks,
          isInTrial: !!row.is_in_trial,
          trialEndsAt: row.trial_ends_at ? new Date(row.trial_ends_at) : null,
          portalExpiresOn: row.portal_expires_on
            ? new Date(row.portal_expires_on)
            : null,
        });
      } catch {
        if (!cancelled) setState({ ...INITIAL, loading: false });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}

// Razorpay payment links — single source of truth for the front-end.
export const RAZORPAY_LINKS = {
  portalMonthly: "https://rzp.io/rzp/clattribeGKportal",
  mocksLifetime: "https://rzp.io/rzp/clattribemocktest",
} as const;
