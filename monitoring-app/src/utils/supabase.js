import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Named export
export const supabase = createClient(supabaseUrl, supabaseKey);
export const supabaseKeyExport = supabaseKey; // Export the supabaseKey