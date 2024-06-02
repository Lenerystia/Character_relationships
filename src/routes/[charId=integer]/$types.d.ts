// src/routes/[charId]/$types.d.ts
declare namespace App {
    interface Locals {}
    interface PageData {}
    interface Platform {}
    interface Session {}
  }
  
  declare module '@sveltejs/kit' {
    interface RouteParams {
      charId: string;
    }
  }
  