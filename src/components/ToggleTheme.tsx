import React from "react";

interface ToggleThemeProps {
	theme: string;
	onChangeTheme: (event: React.FormEvent<HTMLInputElement>) => void;
}

const ToggleTheme: React.FC<ToggleThemeProps> = ({ theme, onChangeTheme }) => {
	return (
		<div className="calculator__theme">
			<label htmlFor="theme1">
				<input
					type="radio"
					name="theme1"
					id="theme1"
					checked={theme === "theme1"}
					//onClick={onChangeTheme}
					onChange={onChangeTheme}
				/>
				<div
					className={`toggle${
						theme === "theme1" ? " toggle--active" : ""
					}`}
				/>
			</label>
			<label htmlFor="theme2">
				<input
					type="radio"
					name="theme2"
					id="theme2"
					checked={theme === "theme2"}
					onChange={onChangeTheme}
				/>
				<div
					className={`toggle${
						theme === "theme2" ? " toggle--active" : ""
					}`}
				/>
			</label>
			<label htmlFor="theme3">
				<input
					type="radio"
					name="theme3"
					id="theme3"
					checked={theme === "theme3"}
					onChange={onChangeTheme}
				/>
				<div
					className={`toggle${
						theme === "theme3" ? " toggle--active" : ""
					}`}
				/>
			</label>
		</div>
	);
};

export default ToggleTheme;
