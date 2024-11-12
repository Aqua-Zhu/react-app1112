// 準備組件
// 把組件放到另一個組件的內容裡面
// 這種寫法在React中叫做組合(composition)
// 此方法在不影響組件功能的基礎上，再給組件增加額外的功能
// 建立一個新的組件

function SecondComponent() {
    return <h1>我是SecondComponent</h1>

}
// 子組件
function MyComponent({ children }) {
    // return<>{children}</>

    return <>
        我是MyCompoennt
        {children}
    </>
}
// 父組件
function App() {
    return (
        <>
            {/* <MyComponent children={<SecondComponent/>}/> */}
            <MyComponent>
                {/* 因為children是React內建的屬性，所以傳送組件時，可以不用寫chilren屬性 */}
                <SecondComponent />
            </MyComponent>
        </>

    )
}
export default App
