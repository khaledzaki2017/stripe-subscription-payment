/** Stripe publishable key */
export const STRIPE_PUBLISHABLE_KEY = "";
/** Stripe product plan ids */
const STANDARD_PRODUCT_ID = "";
const PREMIUM_PRODUCT_ID = "";
const ENTERPRISE_PRODUCT_ID = "";
/** Stripe product plans */
export const PRODUCT_PLANS = [
    {
        id: STANDARD_PRODUCT_ID,
        name: "Standard",
        description: "For Standard Plan.",
        users: "4 users",
        price: 10
    },
    {
        id: PREMIUM_PRODUCT_ID,
        name: "Premium",
        description: "For Premium Plan.",
        users: "20 users",
        price: 25
    },
    {
        id: ENTERPRISE_PRODUCT_ID,
        name: "Enterprise",
        description: "For Enterprise Plan.",
        users: "100+ users",
        price: 50
    }
];
