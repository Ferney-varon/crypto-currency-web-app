import { LayoutProps } from "../types";

export default function DashboardLayout ({children}: LayoutProps) {
    return (
        <section className='dashboard-container'>
            <h2>Dashboard page</h2>
            {children}
        </section>
)}