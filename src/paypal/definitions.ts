export interface PayPalPlugin {
    /**
     * 后期可能会使用
     * @since 1.0.0
     */
    auth(options?: any): Promise<any>;

    /**
     *  参数太多 必须标准化 不然参数错误无法调试
     *
     * @since 1.0.0
     */
    pay(options: OrderOptions): Promise<void>;
}

export interface OrderOptions {
    orderIntent: OrderIntent;

    userAction: UserAction;

    shippingPreference: ShippingPreference;

    currencyCode: CurrencyCode;

    createdItems: CreatedItem[];

    /**
     * ⚠️ 独立
     */
    brandName: string;

    /**
     * 主要参数构建
     */
    purchaseUnit: PurchaseUnit;
}

export enum OrderIntent {
    /**
     * The merchant intends to capture payment immediately after the customer makes a payment.
     */
    Capture = "CAPTURE",

    /**
     * The merchant intends to authorize a payment and place funds on hold after the customer makes
     * a payment. Authorized payments are guaranteed for up to three days but are available to
     * capture for up to 29 days. After the three-day honor period, the original authorized payment
     * expires and you must re-authorize the payment. You must make a separate request to capture
     * payments on demand. This intent is not supported when you have more than one `purchase_unit`
     * within your order.
     */
    Authorize = "AUTHORIZE",
}

export enum UserAction {
    /**
     *
     */
    Continue = "CONTINUE",

    /**
     */
    PAY_NOW = "PAY_NOW",
}

export enum ShippingPreference {
    /**
     *
     */

    Get_From_File = "GET_FROM_FILE",

    /**
     */
    No_Shipping = "NO_SHIPPING",

    /**
     */
    Set_Provided_Address = "SET_PROVIDED_ADDRESS",
}

export enum ItemCategory {
    /**
     *
     */

    Digital_Goods = "DIGITAL_GOODS",

    /**
     */
    Physical_Goods = "PHYSICAL_GOODS",
}

export interface CreatedItem {
    /**
     *
     */
    name: string;
    /**
     *
     */

    quantity: string;
    /**
     *
     */

    amount: string;
    /**
     *
     */

    taxAmount: string;

    /**
     *
     */
    itemCategory: ItemCategory;
}

export interface PurchaseUnit {
    /**
     *
     */
    shipping: Shipping;
    /**
     *
     */

    customId: string;
    /**
     *
     */

    description: string;
    /**
     *
     */

    softDescriptor: string;
}
export interface Shipping {
    addressLine1: string;
    addressLine2: string;

    adminArea1: string;
    adminArea2: string;

    postalCode: string;

    countryCode: string;
}

export enum CurrencyCode {
    /**
     * Currency Code for: Australian dollar
     */
    Aud = "AUD",

    /**
     * Currency Code for: Brazilian real
     *
     * Note: This currency is supported as a payment currency and a currency balance for in-country
     * PayPal accounts only. If the receiver of funds is not from Brazil, then PayPal converts funds
     * into the primary holding currency of the account with the applicable currency conversion
     * rate. The currency conversion rate includes PayPal's applicable spread or fee.
     */
    Brl = "BRL",

    /**
     * Currency Code for: Canadian dollar
     */
    Cad = "CAD",

    /**
     * Currency Code for: Chinese Renmenbi
     *
     * Note: This currency is supported as a payment currency and a currency balance for in-country
     * PayPal accounts only.
     */
    Cny = "CNY",

    /**
     * Currency Code for: Czech koruna
     */
    Czk = "CZK",

    /**
     * Currency Code for: Danish krone
     */
    Dkk = "DKK",

    /**
     * Currency Code for: Euro
     */
    Eur = "EUR",

    /**
     * Currency Code for: Hong Kong dollar
     */
    Hkd = "HKD",

    /**
     * Currency Code for: Hungarian forint
     *
     * Note: This currency does not support decimals. If you pass a decimal amount, an error occurs.
     */
    Huf = "HUF",

    /**
     * Currency Code for: Indian rupee
     *
     * Note: This currency is supported as a payment currency and a currency balance for in-country
     * PayPal India accounts only.
     */
    Inr = "INR",

    /**
     * Currency Code for: Israeli new shekel
     */
    Ils = "ILS",

    /**
     * Currency Code for: Japanese yen
     *
     * Note: This currency does not support decimals. If you pass a decimal amount, an error occurs.
     */
    Jpy = "JPY",

    /**
     * Currency Code for: Malaysian ringgit
     *
     * Note: This currency is supported as a payment currency and a currency balance for in-country
     * PayPal accounts only.
     */
    Myr = "MYR",

    /**
     * Currency Code for: Mexican peso
     */
    Mxn = "MXN",

    /**
     * Currency Code for: New Taiwan dollar
     *
     * Note: This currency does not support decimals. If you pass a decimal amount, an error occurs.
     */
    Twd = "TWD",

    /**
     * Currency Code for: New Zealand dollar
     */
    Nzd = "NZD",

    /**
     * Currency Code for: Norwegian krone
     */
    Nok = "NOK",

    /**
     * Currency Code for: Philippine peso
     */
    Php = "PHP",

    /**
     * Currency Code for: Polish złoty
     */
    Pln = "PLN",

    /**
     * Currency Code for: Pound Sterling
     */
    Gbp = "GBP",

    /**
     * Currency Code for: Russian ruble
     */
    Rub = "RUB",

    /**
     * Currency Code for: Singapore dollar
     */
    Sgd = "SGD",

    /**
     * Currency Code for: Swedish krona
     */
    Sek = "SEK",

    /**
     * Currency Code for: Swiss franc
     */
    Chf = "CHF",

    /**
     * Currency Code for: Thai baht
     */
    Thb = "THB",

    /**
     * Currency Code for: United States dollar
     */
    Usd = "USD",
}
