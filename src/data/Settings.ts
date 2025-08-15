/** ======= THEME ======= */
import { lightTheme, darkTheme } from './Theme';

/** ======= API ======= */
import API from '@mohammadelhsn/portfolio-api-wrapper';

/** ======= TYPES ======= */
import type { Theme } from '@mui/material';
import type { SettingOpts } from './Data';

/** Settings Object for this project */
class SettingsClass {
	/** Enable the example sub pages */
	exampleEnable: boolean;
	/** Enable assignment numbers (this renders an HTML in its place like Doxygen or JavaDoc) */
	assignmentNumbersDisable: boolean;
	/** Enable tasks numbers (this disables the task endpoint because it just renders an HTML before) */
	assignmentTasksDisable: boolean;
	/** Disable Lab Numbers (this renders an HTML in its place like Doxygen or JavaDoc) */
	labNumbersDisable: boolean;
	/** Disable Tasks Numbers (this disables the task endpoint because it just renders an HTML at the lab level) */
	labTasksDisable: boolean;
	/** The code of the course, for example: CP213 */
	courseCode: string;
	/** The name of the course, for example: Intro to Object-Oriented Programming */
	courseName: string;
	/** The term in which the course took place, example: Fall 2024 */
	term: string;
	/** The light theme for this project */
	light: Theme;
	/** The dark theme for this project */
	dark: Theme;
	/** Your name */
	name: string;
	/** Your username */
	username: string;
	/** Your GitHub handle */
	github_handle?: string;
	/** Your GitHub URL */
	github?: string;
	/** Your email */
	email?: string;
	/** Your LinkedIn */
	linkedIn?: string;
	/** This should be set for HTML files, an example is: elha7950_a */
	baseLab?: string;
	/** This should be set for HTML files, an example is: elha7950_l */
	baseAssignment?: string;
	/** An instance of my own API for large static data */
	api = new API('CP213');
	constructor({
		exampleEnable = true,
		assignmentNumbersDisable = false,
		assignmentTasksDisable = false,
		labNumbersDisable = false,
		labTasksDisable = false,
		courseCode,
		courseName,
		term,
		light = lightTheme,
		dark = darkTheme,
		name = 'Mohammad El-Hassan',
		username = 'mohammadelhsn',
		github_handle,
		github,
		email,
		linkedIn,
		baseLab = 'elha7950_l',
		baseAssignment = 'elha7950_a',
	}: SettingOpts) {
		this.exampleEnable = exampleEnable;
		this.assignmentNumbersDisable = assignmentNumbersDisable;
		this.assignmentTasksDisable = assignmentTasksDisable;
		this.labNumbersDisable = labNumbersDisable;
		this.labTasksDisable = labTasksDisable;
		this.courseCode = courseCode;
		this.courseName = `${this.courseCode} - ${courseName}`;
		this.term = term;
		this.light = light;
		this.dark = dark;
		this.name = name;
		this.username = username;
		this.github_handle = github_handle ? github_handle : `@${this.username}`;
		this.github = github ? github : `https://github.com/${this.username}`;
		this.email = email ? email : `${this.username}@gmail.com`;
		this.linkedIn = linkedIn
			? linkedIn
			: `https://www.linkedin.com/in/${this.username}`;
		this.baseLab = baseLab;
		this.baseAssignment = baseAssignment;
	}
}

const Settings = new SettingsClass({
	exampleEnable: false,
	labNumbersDisable: true,
	labTasksDisable: true,
	assignmentNumbersDisable: true,
	assignmentTasksDisable: true,
	courseCode: 'CP213',
	courseName: 'Object-Oriented Programming with Java',
	term: 'Fall 2024',
});

export default Settings;
