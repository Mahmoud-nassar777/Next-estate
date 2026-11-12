import { getCurrentUser } from "@/server-actions/getCurrentUser";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

async function ProtectedContent({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = await getCurrentUser();

    if (!user) {
        redirect("/");
    }

    return <>{children}</>;
}

export default function ProtectedLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProtectedContent>{children}</ProtectedContent>
        </Suspense>
    );
}