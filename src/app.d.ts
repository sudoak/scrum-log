// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { SupabaseClient, Session } from '@supabase/supabase-js'
import type { TypedSupabaseClient } from "@supabase/auth-helpers-sveltekit/dist/types"
declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient<Database>;
			sb: TypedSupabaseClient
			session: Session | null
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			session: Session | null;
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
