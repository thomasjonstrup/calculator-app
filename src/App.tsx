import { useCallback, useState } from "react";
import "./scss/main.scss";

import ToggleTheme from "./components/ToggleTheme";

interface calcButton {
	value: string;
	displayValue: string;
	type: string;
}

const addBodyClass = (className: string) =>
	document.body.classList.add(className);
const addHtmlClass = (className: string) =>
	document.documentElement.classList.add(className);

export const formatNumber = (inputNumber: string) => {
	let formetedNumber = Number(inputNumber)
		.toFixed(2)
		.replace(/\d(?=(\d{3})+\.)/g, "$&,");
	let splitArray = formetedNumber.split(".");
	if (splitArray.length > 1) {
		formetedNumber = splitArray[0];
	}
	return formetedNumber;
};

function App() {
	const [calcValue, setCalcValue] = useState("");
	const [calculatedValue, setCalculatedValue] = useState("");
	const [theme, setTheme] = useState("theme-1");

	const calcButtons: calcButton[] = [
		{
			value: "7",
			displayValue: "7",
			type: "btn btn--secondary",
		},
		{
			value: "8",
			displayValue: "8",
			type: "btn btn--secondary",
		},
		{
			value: "9",
			displayValue: "9",
			type: "btn btn--secondary",
		},
		{
			value: "del",
			displayValue: "del",
			type: "btn btn--tetriary btn--del",
		},
		{
			value: "4",
			displayValue: "4",
			type: "btn btn--secondary",
		},
		{
			value: "5",
			displayValue: "5",
			type: "btn btn--secondary",
		},
		{
			value: "6",
			displayValue: "6",
			type: "btn btn--secondary",
		},
		{
			value: "+",
			displayValue: "+",
			type: "btn btn--secondary",
		},
		{
			value: "1",
			displayValue: "1",
			type: "btn btn--secondary",
		},
		{
			value: "2",
			displayValue: "2",
			type: "btn btn--secondary",
		},
		{
			value: "3",
			displayValue: "3",
			type: "btn btn--secondary",
		},
		{
			value: "-",
			displayValue: "-",
			type: "btn btn--secondary",
		},
		{
			value: ".",
			displayValue: ".",
			type: "btn btn--secondary",
		},
		{
			value: "0",
			displayValue: "0",
			type: "btn btn--secondary",
		},
		{
			value: "/",
			displayValue: "/",
			type: "btn btn--secondary",
		},
		{
			value: "*",
			displayValue: "x",
			type: "btn btn--secondary",
		},
		{
			value: "reset",
			displayValue: "reset",
			type: "btn btn--tetriary btn--reset",
		},
		{
			value: "=",
			displayValue: "=",
			type: "btn btn--primary btn--equal",
		},
	];

	const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
		if (isNaN(event.currentTarget.value as any)) {
			return;
		}
		setCalcValue(event.currentTarget.value);
	};

	const handleThemeChange = useCallback(
		(event: React.FormEvent<HTMLInputElement>) => {
			const themeName: string = event.currentTarget.name;
			setTheme(event.currentTarget.name);

			if (!document.body.classList.contains(themeName)) {
				document.body.className = "";
				document.documentElement.className = "";
				addBodyClass(themeName);
				addHtmlClass(themeName);
			}
		},
		[]
	);

	const onClick = (event: React.FormEvent<HTMLButtonElement>): void => {
		if (event.currentTarget.value === "del") {
			const newValue = calcValue.slice(0, -1);

			return setCalcValue(newValue);
		}
		if (event.currentTarget.value === "reset") {
			setCalculatedValue("");
			setCalcValue("");

			return;
		}
		if (event.currentTarget.value === "=") {
			try {
				// eslint-disable-next-line
				const value = eval(calcValue);

				return setCalculatedValue(formatNumber(value));
			} catch (error) {
				return setCalculatedValue("");
			}
		}

		setCalcValue(calcValue + event.currentTarget.value);

		if (calculatedValue) {
			setCalculatedValue("");
		}
	};

	return (
		<div className="App">
			<main>
				<div className="container">
					<div className="calculator">
						<div className="calculator__top">
							<div className="calculator__inner">
								<div className="calculator__left">
									<h1>calc</h1>
								</div>
								<div className="calculator__right">
									<p>Theme</p>
									<div>
										<div className="calculator__theme-numbers">
											<p>1</p>
											<p>2</p>
											<p>3</p>
										</div>
										<ToggleTheme
											theme={theme}
											onChangeTheme={handleThemeChange}
										/>
									</div>
								</div>
							</div>
							<input
								type="text"
								name="calculator-input"
								className="calculator__input"
								value={
									calculatedValue
										? calculatedValue
										: calcValue
								}
								onChange={onChange}
							/>
						</div>
						<div className="calculator__content">
							{calcButtons.map(
								(button: calcButton, index: number) => {
									return (
										<button
											className={button.type}
											onClick={onClick}
											value={button.value}
											key={index}
										>
											{button.displayValue}
										</button>
									);
								}
							)}
						</div>
					</div>
				</div>
			</main>
			<footer className="footer">
				<div className="container">
					<div className="attribution">
						Challenge by
						<a
							href="https://www.frontendmentor.io?ref=challenge"
							target="_blank"
							rel="noreferrer"
						>
							Frontend Mentor
						</a>
						. Coded by
						<a href="https://github.com/thomasjonstrup">
							Thomas Jonstrup
						</a>
						.
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
