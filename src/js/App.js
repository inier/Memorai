import React, {useState} from "react";
import {IntlProvider} from "react-intl";

import en from "../translations/en.json";
import ru from "../translations/ru.json";
import Game from "./Game/Game";

const messages = {
	en, ru
};

export default function App() {
	const [locale] = useState("ru");

	return <IntlProvider locale={locale} messages={messages[locale]}>
		<Game/>
	</IntlProvider>;
}