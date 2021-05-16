import React from "react";

interface ToggleThemeProps {
	theme: string;
	onChangeTheme: (event: React.FormEvent<HTMLInputElement>) => void;
}

const themes = {
	theme1: "theme-1",
	theme2: "theme-2",
	theme3: "theme-3",
};

const ToggleTheme: React.FC<ToggleThemeProps> = ({ theme, onChangeTheme }) => {
	return (
		<div className="calculator__theme">
			<label htmlFor={themes.theme1}>
				<input
					type="radio"
					name={themes.theme1}
					id={themes.theme1}
					checked={theme === themes.theme1}
					//onClick={onChangeTheme}
					onChange={onChangeTheme}
				/>
				<div
					className={`toggle${
						theme === themes.theme1 ? " toggle--active" : ""
					}`}
				/>
			</label>
			<label htmlFor={themes.theme2}>
				<input
					type="radio"
					name={themes.theme2}
					id={themes.theme2}
					checked={theme === themes.theme2}
					onChange={onChangeTheme}
				/>
				<div
					className={`toggle${
						theme === themes.theme2 ? " toggle--active" : ""
					}`}
				/>
			</label>
			<label htmlFor={themes.theme3}>
				<input
					type="radio"
					name={themes.theme3}
					id={themes.theme3}
					checked={theme === themes.theme3}
					onChange={onChangeTheme}
				/>
				<div
					className={`toggle${
						theme === themes.theme3 ? " toggle--active" : ""
					}`}
				/>
			</label>
		</div>
	);
};

export default ToggleTheme;
