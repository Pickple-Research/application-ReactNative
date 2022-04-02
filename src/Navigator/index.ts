// 최상단의 Navigator
export * from "./App.stack.navigator"

// App 바로 아래의 Navigator
// Splash -> Auth -> Main 순으로 이동하는 식으로 진행
export * from "./Auth.stack.navigator"
export * from "./Main.bottomTab.navigator"

// MainTab Navigator가 소유하는 5개의 Stack (tab 한 개당 각각 하나씩)
export * from "./Client.stack.navigator";
export * from "./Research.stack.navigator";
export * from "./Home.stack.navigator";
export * from "./Community.stack.navigator";
export * from "./User.stack.navigator";