# Stripe + Supabase + NextJS

Integration of Stripe payments using Supabase backend.

## Supabase

```cmd
supabase init
supabase link --project-ref [your_project_id_here]

supabase secrets list
supabase secrets set STRIPE_SECRET_KEY=[YOUR_STRIPE_SECRET_KEY]
supabase secrets set STRIPE_WEBHOOK_SIGNING_SECRET=[YOUR_STRIPE_WEBHOOK_SIGNING_SECRET]

supabase functions new stripe_webhooks
supabase functions new create_payment_intent

supabase functions deploy create_payment_intent
supabase functions deploy stripe_webhooks --no-verify-jwt
```

## NextJS

Create a new application

```cmd
npx create-next-app@latest
```