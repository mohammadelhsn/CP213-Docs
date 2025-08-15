import type { Theme } from '@mui/material';
import { type ElementType } from 'react';

export type SettingOpts = {
	/** Enable the example sub pages */
	exampleEnable?: boolean;
	/** Enable assignment numbers (this renders an HTML in its place like Doxygen or JavaDoc) */
	assignmentNumbersDisable?: boolean;
	/** Enable tasks numbers (this disables the task endpoint because it just renders an HTML before) */
	assignmentTasksDisable?: boolean;
	/** Disable Lab Numbers (this renders an HTML in its place like Doxygen or JavaDoc) */
	labNumbersDisable?: boolean;
	/** Disable Tasks Numbers (this disables the task endpoint because it just renders an HTML at the lab level) */
	labTasksDisable?: boolean;
	/** The code of the course, for example: CP213 */
	courseCode: string;
	/** The name of the course, for example: Intro to Object-Oriented Programming */
	courseName: string;
	/** The term in which the course took place, example: Fall 2024 */
	term: string;
	/** The light theme for this project */
	light?: Theme;
	/** The dark theme for this project */
	dark?: Theme;
	/** Your name */
	name?: string;
	/** Your username */
	username?: string;
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
};

/** Your base website URL */
export const baseURL = 'https://mohammadelhsn.github.io/';

/** */
export interface pageData {
	/**  */
	title: string;
	/** */
	description: string;
	/** */
	numberOfEntries: number;
}

/** */
export type ItemType = 'lab' | 'example' | 'assignment' | 'task';

/** */
export interface ItemListOpts {
	/** */
	itemType: ItemType;
	/** */
	count?: number;
	/** */
	taskStr?: string;
	/** */
	isFile?: boolean;
}

export interface AssignmentItemOpts {
	/** */
	key: number;
	/** */
	link: string;
	/** */
	adds: string;
	/** */
	type: ItemType;
}

export interface SectionOpts {
	/** */
	title: string;
	/** */
	children: React.ReactNode;
	/** */
	icon?: ElementType;
}

export interface TopicOpts {
	/** */
	eventKey: string;
	/** */
	title: string;
	/** */
	items: string[];
	/** */
	icon?: ElementType;
}

export interface ExampleData {
	/** */
	title: string;
	/** */
	url: string;
}

export interface TechItemOpts {
	/** */
	bolded: string;
	/** */
	nonBolded: string;
	/** */
	icon?: ElementType;
}

export interface CardTypes {
	/** */
	title: string;
	/** */
	desc: string;
	/** */
	itemType: ItemType;
	/** */
	icon?: ElementType;
}

export interface TaskData {
	/** */
	name: string;
	/** id: t{num} */
	id: string;
	/** */
	description: string;
	/** List of goals or objectives */
	objectives: string[];
	/** Example output or result, as a string */
	sampleOutput: string;
	/** Skills or tech demonstrated, e.g. ["Python", "Multiline Strings"] */
	skills: string[];
}

export interface ConstantsData {
	/** */
	name: string;
	/** */
	value: string;
	/** */
	description?: string;
}
export interface FunctionsData {
	/** */
	functionName: string;
	/** */
	signature: string;
	/** */
	description: string;
}

export interface FunctionPageProps {
	/** */
	constants: ConstantsData[];
	/** */
	functions: FunctionsData[];
	/** */
	parent: string;
}
export interface AssessmentDataType {
	/** */
	name: string;
	/** */
	id: string;
	/** */
	tasks: TaskData[];
	/** */
	functions?: FunctionsData[];
	/** */
	constants?: ConstantsData[];
}

export interface FunctionsPageProps {
	/** */
	data: FunctionsData;
}

/** */
export type LabsAssignmentOpt = 'assignment' | 'lab' | 'example';

export interface LabsAssignmentsOpts {
	/** */
	type: LabsAssignmentOpt;
}

export interface HeaderProps {
	/** */
	mode: 'light' | 'dark';
	/** */
	toggleColorMode: () => void;
}

export type TaskPageParams = {
	/** Assessment Number (e.g. elha7950_a01) */
	num: string;
	/** Task Number (e.g. t01) */
	task: string;
};

export type LabsAssignmentParams = {
	/** The lab / assignment number (e.g. elha7950_a01) */
	num: string;
};
