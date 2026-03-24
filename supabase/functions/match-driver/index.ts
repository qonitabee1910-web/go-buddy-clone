// Supabase Edge Function: match-driver
// Logika untuk mencari driver terdekat dan mengirim notifikasi realtime

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

serve(async (req) => {
  try {
    const { orderId, lat, lng } = await req.json()

    // 1. Inisialisasi Supabase Admin Client
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // 2. Logika mencari driver terdekat (PostGIS simulation)
    const { data: drivers, error: driverError } = await supabaseAdmin
      .from('drivers')
      .select('*')
      .eq('is_available', true)
      .limit(5)

    if (driverError) throw driverError

    // 3. Update Order dengan driver yang ditemukan
    if (drivers && drivers.length > 0) {
      const selectedDriver = drivers[0]
      await supabaseAdmin
        .from('orders')
        .update({ 
          driver_id: selectedDriver.id,
          status: 'Mencari Driver' 
        })
        .eq('id', orderId)

      // 4. Kirim notifikasi Realtime ke Driver
      // Supabase Realtime akan otomatis menangani ini jika driver subscribe ke table orders
      
      return new Response(
        JSON.stringify({ success: true, driver: selectedDriver }),
        { headers: { "Content-Type": "application/json" } }
      )
    }

    return new Response(
      JSON.stringify({ success: false, message: "No drivers available" }),
      { headers: { "Content-Type": "application/json" } }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    )
  }
})
