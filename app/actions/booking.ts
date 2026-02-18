"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function submitBooking(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const goals = formData.get("goals");

  const { data, error } = await supabase
    .from('bookings') // Make sure you have a table named 'bookings'
    .insert([{ name, email, goals }])
    .select();

  if (error) {
    console.error("Supabase Error:", error.message);
    return { success: false };
  }

  revalidatePath("/");
  return { success: true };
}