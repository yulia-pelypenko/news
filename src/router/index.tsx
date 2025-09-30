import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Routes as AppRoutes } from "@/config/routes";
import modules from "@/modules";
import { Loader } from "@/modules/common/components";
import { MainLayout } from "@/modules/layout/components";
import { mappedRouteGuards } from "./mappedRouteGuards";

export const RoutesRenderer = () => (
	<Routes>
		<Route path="/" element={<Navigate to={AppRoutes.News} replace />} />
		<Route element={<MainLayout />}>
			{modules.routes?.map(({ path, Component, type, lazy }) => {
				const CurrentRoute = mappedRouteGuards[type];

				const element = lazy ? (
					<Suspense fallback={<Loader />}>
						<CurrentRoute Component={Component} />
					</Suspense>
				) : (
					<CurrentRoute Component={Component} />
				);

				return <Route key={path} path={path} element={element} />;
			})}
		</Route>
	</Routes>
);
