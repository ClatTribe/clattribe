import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, city } = body

    const { data, error } = await supabase
      .from('Enquiry')
      .insert([{ name, phone, email, city }])

    if (error) throw error

    return NextResponse.json({ success: true, data })
  } catch (error: unknown) {
    let errorMessage = 'Unknown error'

    if (error instanceof Error) {
      errorMessage = error.message
    }

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    )
  }
}