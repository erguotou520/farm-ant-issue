import "./main.css";
import { Button, ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import { useEffect } from "react";
export function Main() {
	useEffect(() => {
		console.log("Hello, Ant Design!");
		// message.info('Hello, Ant Design!')
		fetch("/api/hello").catch(console.warn);
		const ws = new WebSocket(
			`${window.location.protocol === "https:" ? "wss" : "ws"}://${window.location.host}/api/ws`,
		);
		ws.onopen = console.log;
    ws.onerror = console.error;
    ws.onmessage = console.log;
    ws.onclose = console.log;
	}, []);

	return (
		<ConfigProvider
			locale={zhCN}
			theme={{
				cssVar: true,
				hashed: false,
				token: {
					colorPrimary: "#8473FF",
					colorLink: "#8473FF",
					colorInfo: "#8473FF",
					borderRadius: 2,
				},
				components: {
					Menu: {
						darkItemBg: "transparent",
						darkItemColor: "black",
						darkItemHoverBg: "#8473FF",
						itemBorderRadius: 4,
						itemPaddingInline: 30,
					},
					Button: {
						borderRadius: 4,
					},
				},
			}}
		>
			<div className="flex px-2 text-#333">
				<Button>1234</Button>
			</div>
		</ConfigProvider>
	);
}
