import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="flex items-center space-x-4 py-4">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={64} // Adjust height as needed
            width={324} // Adjust width proportionally
            alt="logo"
            className="h-16 w-auto"
          />
        </Link>
        <p className="text-xl font-semibold">Admin Dashboard</p>
      </header>

      <main className="space-y-12">
        <section className="space-y-2">
          <h1 className="text-2xl font-bold">Welcome 👋</h1>
          <p className="text-gray-700">Start the day with managing new appointments</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            type="appointments"
            count={appointments?.scheduledCount ?? 0}
            label="Scheduled appointments"
            icon="/assets/icons/appointments.svg"
          />
          <StatCard
            type="pending"
            count={appointments?.pendingCount ?? 0}
            label="Pending appointments"
            icon="/assets/icons/pending.svg"
          />
          <StatCard
            type="cancelled"
            count={appointments?.cancelledCount ?? 0}
            label="Cancelled appointments"
            icon="/assets/icons/cancelled.svg"
          />
        </section>

        <DataTable columns={columns} data={appointments?.documents ?? []} />
      </main>
    </div>
  );
};

export default AdminPage;
