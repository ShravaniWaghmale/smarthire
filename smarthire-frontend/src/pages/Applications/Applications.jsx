import { useMemo, useState } from "react";

import AppShell from "../../layouts/AppShell";

import ApplicationsHeader from "../../components/applications/ApplicationsHeader";
import ApplicationsFilters from "../../components/applications/ApplicationsFilters";
import ApplicationsTable from "../../components/applications/ApplicationsTable";

import AddApplicationModal from "../../components/modals/AddApplicationModal";
import DeleteModal from "../../components/modals/DeleteModal";

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingApplication, setEditingApplication] = useState(null);
  const [deleteApplication, setDeleteApplication] = useState(null);

  // --------------------------
  // Filter + Search + Sort
  // --------------------------
  const filteredApplications = useMemo(() => {
    let data = [...applications];

    if (search.trim()) {
      const keyword = search.toLowerCase();

      data = data.filter(
        (item) =>
          item.company.toLowerCase().includes(keyword) ||
          item.role.toLowerCase().includes(keyword)
      );
    }

    if (statusFilter !== "All") {
      data = data.filter((item) => item.status === statusFilter);
    }

    if (sortBy === "Company") {
      data.sort((a, b) => a.company.localeCompare(b.company));
    }

    return data;
  }, [applications, search, statusFilter, sortBy]);

  // --------------------------
  // Add / Edit
  // --------------------------
  const handleSave = (formData) => {
    if (editingApplication) {
      setApplications((prev) =>
        prev.map((item) =>
          item.id === editingApplication.id
            ? { ...item, ...formData }
            : item
        )
      );

      setEditingApplication(null);
    } else {
      setApplications((prev) => [
        {
          id: Date.now(),
          ...formData,
          date: new Date().toLocaleDateString(),
        },
        ...prev,
      ]);
    }

    setShowAddModal(false);
  };

  // --------------------------
  // Delete
  // --------------------------
  const handleDelete = () => {
    setApplications((prev) =>
      prev.filter((item) => item.id !== deleteApplication.id)
    );

    setDeleteApplication(null);
  };

  return (
    <AppShell>
      <ApplicationsHeader
        total={applications.length}
        onAdd={() => {
          setEditingApplication(null);
          setShowAddModal(true);
        }}
      />

      <ApplicationsFilters
        search={search}
        setSearch={setSearch}
        status={statusFilter}
        setStatus={setStatusFilter}
        sort={sortBy}
        setSort={setSortBy}
      />

      <ApplicationsTable
        applications={filteredApplications}
        onView={(application) => {
          console.log(application);
        }}
        onEdit={(application) => {
          setEditingApplication(application);
          setShowAddModal(true);
        }}
        onDelete={(application) => {
          setDeleteApplication(application);
        }}
      />

      {/* Add / Edit */}
      <AddApplicationModal
        open={showAddModal}
        onClose={() => {
          setShowAddModal(false);
          setEditingApplication(null);
        }}
        onSave={handleSave}
        initialData={editingApplication}
      />

      {/* Delete */}
      <DeleteModal
        open={!!deleteApplication}
        application={deleteApplication}
        onClose={() => setDeleteApplication(null)}
        onConfirm={handleDelete}
      />
    </AppShell>
  );
}