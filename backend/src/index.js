import express from "express"
import dotenv from "dotenv"
import ConnectDB from "./db/db.js";
import accountRouter from "./router/account.router.js";
import userRouter from "./router/user.router.js";
import addressRouter from "./router/address.router.js";
import storeRouter from "./router/store.router.js";
import storefeatureRouter from "./router/storefeature.router.js";
import storeattributeRouter from "./router/storeattribute.router.js";
import categoryRouter from "./router/category.router.js";
import StoreCategoryRouter from "./router/storecategory.router.js";
import ProductVariantRouter from "./router/productvariant.router.js";
import ProductRouter from "./router/product.router.js";
import ProductImageRouter from "./router/productimage.router.js";
import tagRouter from "./router/tag.router.js";
import producttagRouter from "./router/producttag.router.js";
import reviewRouter from "./router/review.router.js";
import cartRouter from "./router/cart.router.js";
import cartItemRouter from "./router/cartitem.router.js";
import WishlistItemRouter from "./router/wishlistitem.router.js";
import orderRouter from "./router/order.router.js";
import orderitemRouter from "./router/orderitem.router.js";
import paymentRouter from "./router/payment.router.js";
import shippingmethodRouter from "./router/shippingmethod.router.js";
import shippingzoneRouter from "./router/shippingzone.router.js";
import ShippingRouter from "./router/shipping.router.js";
import TrackingEventRouter from "./router/shippingtrackingevent.router.js";
import CouponRouter from "./router/coupon.router.js";
import CouponProductRouter from "./router/couponproduct.router.js";
import CouponCategoryRouter from "./router/couponcategory.router.js";
import CouponUsageRouter from "./router/couponusage.router.js";
import StoreAnalyticRouter from "./router/storeanalytic.router.js";
import ProductAnalyticRouter from "./router/productanalytic.router.js";
import ProductViewRouter from "./router/productview.router.js";
import SessionTrackingRouter from "./router/sessiontracking.router.js";
import CartEventRouter from "./router/cartevent.router.js";
import WishlistEventRouter from "./router/wishlistevent.router.js";
import BannerRouter from "./router/banner.router.js";
import BannerTargetRoleRouter from "./router/bannertargetrole.router.js";
import BannerTargetAudienceRouter from "./router/bannertargetaudience.router.js";
import PageRouter from "./router/page.router.js";

dotenv.config({
    path:"./.env",
    quiet:true
})
ConnectDB();

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/uploads", express.static("uploads"));

app.use("/api/accounts", accountRouter);
app.use("/api/users",userRouter);
app.use("/api/address",addressRouter);
app.use("/api/stores", storeRouter);
app.use("/api/storefeatures", storefeatureRouter);
app.use("/api/storeattribute",storeattributeRouter);
app.use("/api/category",categoryRouter);
app.use("/api/storecategory",StoreCategoryRouter);
app.use("/api/products",ProductRouter);
app.use("/api/productsvariants",ProductVariantRouter);
app.use("/api/productsimage",ProductImageRouter);
app.use("/api/tags",tagRouter);
app.use("/api/productstag",producttagRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/carts", cartRouter);
app.use("/api/cartsitem", cartItemRouter);
app.use("/api/wishlistitems",WishlistItemRouter);
app.use("/api/orders", orderRouter);
app.use("/api/orderitems",orderitemRouter);
app.use("/api/payments", paymentRouter);
app.use("/api/shippingmethod",shippingmethodRouter);
app.use("/api/shippingzone",shippingzoneRouter);
app.use("/api/shippings",ShippingRouter);
app.use("/api/shippingtrackingevents",TrackingEventRouter);
app.use("/api/coupons", CouponRouter);
app.use("/api/couponproducts", CouponProductRouter);
app.use("/api/couponcategories",CouponCategoryRouter);
app.use("/api/couponusages",CouponUsageRouter);
app.use("/api/storeanalytics",StoreAnalyticRouter);
app.use("/api/productanalytics",ProductAnalyticRouter);
app.use("/api/productviews",ProductViewRouter);
app.use("/api/sessiontracking",SessionTrackingRouter);
app.use("/api/cartevents",CartEventRouter);
app.use("/api/wishlistevents",WishlistEventRouter);
app.use("/api/banner",BannerRouter);
app.use("/api/bannertargetroles",BannerTargetRoleRouter);
app.use("/api/bannertargetaudience",BannerTargetAudienceRouter);
app.use("/api/pages",PageRouter);

app.get("/",(req,res)=>{
    res.send("Welcome to e-commerce api");
})
app.listen(process.env.PORT,(err)=>{
    !err ? console.log(`server started on port ${process.env.PORT}`) : null;
});