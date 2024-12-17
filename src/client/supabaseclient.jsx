import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://muphpntgytuibgjgxauv.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11cGhwbnRneXR1aWJnamd4YXV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzMzYxMzAsImV4cCI6MjA0OTkxMjEzMH0.SZ_9um1ILfxMgDGbRAkcb66AHRYqxIozGq5TLSV8dNo"
);

export default supabase;
