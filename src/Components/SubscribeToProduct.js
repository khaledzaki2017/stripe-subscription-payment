import React from "react";
import { Row, Col, Button } from "reactstrap";
import { withToastManager } from "react-toast-notifications";
import StripeCheckout from "react-stripe-checkout";
import ErrorMessage from "./ErrorMessage";
import useErrorHandler from "./ErrorHandler";

/** Styling */
import {
    CurrencySymbol,
    SubscriptionPlansWrapper,
    SubscriptionPlanCard,
    SubscriptionPlanCardHeading,
    SubscriptionPlanCardPrice,
    SubscriptionPlanCardSubHeading
} from "./Styles";

/** Utils */
import {
    PRODUCT_PLANS,
    Product,
    STRIPE_PUBLISHABLE_KEY
} from "../Utils/Consts";
import { apiRequest } from "../Utils/API";



const SubscribeToProduct = ({ toastManager }) => {
    const { error, showError } = useErrorHandler(null);


    const subscribeToProductPlan = async (token, productPlan) => {
        const bodyParams = {
            'stripeToken': token.id,
            'email': token.email,
            productPlan
        };

        const response = await apiRequest(
            "http://localhost:4000/create-customer",
            "POST",
            bodyParams
        ).catch(e => {
            showError(e.message);
        });

        toastNotification("Subscription successful");
    };

    /**
     * List product plans
     *  productPlans - array of product plans created in Stripe account that a user can subscribe to
     */
    const displayProductPlans = (productPlans = []) => {
        if (productPlans && productPlans.length) {
            return productPlans.map((product, i) => {
                return (
                    <Col xs={12} md={4} lg={4} key={i}>
                        <SubscriptionPlanCard>
                            <SubscriptionPlanCardHeading>
                                {product.name}
                            </SubscriptionPlanCardHeading>
                            <SubscriptionPlanCardPrice>
                                <CurrencySymbol>$</CurrencySymbol>&nbsp;{product.price}
                            </SubscriptionPlanCardPrice>
                            <SubscriptionPlanCardSubHeading>
                                billed monthly
              </SubscriptionPlanCardSubHeading>
                            <SubscriptionPlanCardSubHeading>
                                {product.description}
                            </SubscriptionPlanCardSubHeading>
                            <SubscriptionPlanCardSubHeading style={{ borderBottom: "none" }}>
                                {product.users}
                            </SubscriptionPlanCardSubHeading>
                            <br />
                            <br />
                            <StripeCheckout
                                name="My Store"
                                description={`${product.name} Package`}
                                token={token => subscribeToProductPlan(token, product.id)}
                                billingAddress={true}
                                zipCode={true}
                                panelLabel="Subscribe"
                                stripeKey={STRIPE_PUBLISHABLE_KEY}
                            >
                                <Button block={true}>Select This Plan</Button>
                            </StripeCheckout>
                        </SubscriptionPlanCard>
                    </Col>
                );
            });
        }
        return "No existing product plans";
    };

    /**
     * Toast notification
     * message - notification message to be displayed
     */
    const toastNotification = (message) => {
        toastManager.add(message, {
            appearance: "success",
            autoDismiss: true
        });
    };

    return (
        <SubscriptionPlansWrapper>
            <Row>{displayProductPlans(PRODUCT_PLANS)}</Row>
            {error && <ErrorMessage errorMessage={error} />}
        </SubscriptionPlansWrapper>
    );
};

export default withToastManager(SubscribeToProduct);