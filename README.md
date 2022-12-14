# Frontend Mentor - E-commerce product page

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6).

## The challenge

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

## 📷 Screenshot

## 🔧 Tools I used

- React
- React Router
- React Redux
- Styled Components
- Vite

## Note

### Vite 初體驗

這次也是初次嘗試從 CRA 轉換到 ViteJS！

可參考這篇 [Migrating from Create React App (CRA) to Vite](https://cathalmacdonnacha.com/migrating-from-create-react-app-cra-to-vite)

### 優化圖片

實作完 Frontend Mentor 的商品詳細頁面後，覺得那就順便把購物車做更完整一點吧！
於是自己到 [Unsplash](https://unsplash.com) 下載了一些商品圖，隨意建構一些 data 資料。
下載圖片的時候，沒有特別去注意檔案大小，於是慘劇就發生了（好拉也沒有很慘）。

總之，就讓我深刻體驗到網頁優化的重要性！把下載的圖片放到網頁上後，只覺得開發過程變得非常卡頓，一開始還想說：「啊～～是不是該換電腦了~~」。後來實在卡到受不了，於是突然想到該不會是圖片的問題吧（終於覺醒。看了圖片詳細資料之後不得了啊，每個商品圖都超大，檔案大小和尺寸都是。趕緊上網找優化圖片的工具好好整頓圖片一番 😅

（訓話自己中）以後，請，拜託：

1. 網站上圖片需要的尺寸多大，就下載多大的圖片
2. 在解析度影下不大的情況下，可壓縮就記得壓縮

優化圖片的好用工具：
[Squoosh](https://squoosh.app)
[TinyJpg](https://tinyjpg.com)
