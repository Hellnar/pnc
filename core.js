const MENU_LIST = [
    {name: "Alliance coins", path: "alliance_coins"}
]

createMenu()

function createMenu() {
    const menu = document.createElement("div")
    menu.className = "flex flex-col"
    let list = `<a href="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Main</a>`
    for(const item of MENU_LIST) {
        list += `
        <a href="/pages/${item.path}/index.html" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <span>${item.name}</span>
        </a>
        `
    }
    menu.innerHTML = list
    console.log(list)
    document.getElementById("menu").appendChild(menu)
}