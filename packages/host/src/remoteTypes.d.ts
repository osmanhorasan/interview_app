///<reference types="react" />

declare module "authApp/AuthButton" {
	import { ComponentType } from "react";
	interface Props { }
	const AuthButton: ComponentType<Props>;
	export default AuthButton
}
declare module "authApp/Auth0ProviderWithNavigate" {
	import { ComponentType } from "react";
	interface Props { }
	const Auth0ProviderWithNavigate: ComponentType<Props>;
	export default Auth0ProviderWithNavigate
}
declare module "authApp/RootState" {
	export type State = RootState;
}