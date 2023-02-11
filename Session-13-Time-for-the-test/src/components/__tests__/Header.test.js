const { render } = require("@testing-library/react")
import { Provider } from "react-redux"
import store from "../../utils/store"
import { Header } from "../Header"
import { StaticRouter } from "react-router-dom/server";
import { RiEmotionLine, RiWifiOffLine } from "react-icons/ri";

test('Logo should load on rendering header', () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    const logo = header.getAllByTestId("logo")
    expect(logo[0].src).toBe("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbp0OxXzrRkjDtK3Ge6X6goSmhJL1MoDmXKg&usqp=CAU")
})

/* test('Online status should be green on rendering header', () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    const onlineStatusIcon = header.getAllByTestId("online-status-icon")
    console.log("H-", onlineStatusIcon[0])
    expect(onlineStatusIcon[0].xmlns).toBe("http://www.w3.org/2000/svg")
}) */

test('Cart item should be 0 on rendering header', () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    const cart = header.getByTestId('cart')
    expect(cart.innerHTML).toBe("Cart - 0")
})