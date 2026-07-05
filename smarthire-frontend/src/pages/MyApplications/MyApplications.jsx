import { useEffect, useState } from "react";

import AppShell from "../../layouts/AppShell";

import MyApplicationsHeader from "../../components/myApplications/MyApplicationsHeader";
import MyApplicationsFilters from "../../components/myApplications/MyApplicationsFilters";
import MyApplicationsTable from "../../components/myApplications/MyApplicationsTable";
import ApplicationModal from "../../components/myApplications/ApplicationModal";

import DeleteModal from "../../components/modals/DeleteModal";
import ApplicationDetailsModal from "../../components/myApplications/ApplicationDetailsModal";

import {
  getApplications,
  createApplication,
  updateApplication,
  deleteApplication,
} from "../../api/applications";

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sort, setSort] = useState("Newest");

  const [showModal, setShowModal] = useState(false);
  const [editingApplication, setEditingApplication] = useState(null);

  const [selectedApplication, setSelectedApplication] = useState(null);

  const [deleteItem, setDeleteItem] = useState(null);

  async function loadApplications() {
    try {
      setLoading(true);

      const data = await getApplications();

      setApplications(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadApplications();
  }, []);

  async function handleSave(application) {
    try {
      if (editingApplication) {
        await updateApplication(editingApplication._id, application);
      } else {
        await createApplication(application);
      }

      setShowModal(false);
      setEditingApplication(null);

      loadApplications();
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDelete() {
    try {
      await deleteApplication(deleteItem._id);

      setDeleteItem(null);

      loadApplications();
    } catch (err) {
      console.error(err);
    }
  }

  const filteredApplications = applications
    .filter((item) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        item.company?.toLowerCase().includes(searchText) ||
        item.role?.toLowerCase().includes(searchText) ||
        item.location?.toLowerCase().includes(searchText) ||
        item.status?.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "All" ||
        item.status === statusFilter;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sort) {
        case "Oldest":
          return new Date(a.createdAt) - new Date(b.createdAt);

        case "Company":
          return a.company.localeCompare(b.company);

        case "Salary":
          return (
            parseInt(
              (b.salary || "0").replace(/\D/g, "")
            ) -
            parseInt(
              (a.salary || "0").replace(/\D/g, "")
            )
          );

        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

  return (
    <AppShell>
      <MyApplicationsHeader
        onAdd={() => {
          setEditingApplication(null);
          setShowModal(true);
        }}
      />

      <MyApplicationsFilters
        search={search}
        setSearch={setSearch}
        status={statusFilter}
        setStatus={setStatusFilter}
        sort={sort}
        setSort={setSort}
      />

      <MyApplicationsTable
        applications={filteredApplications}
        loading={loading}
        onView={setSelectedApplication}
        onEdit={(item) => {
          setEditingApplication(item);
          setShowModal(true);
        }}
        onDelete={(item) => setDeleteItem(item)}
      />

      <ApplicationModal
        open={showModal}
        application={editingApplication}
        onClose={() => {
          setShowModal(false);
          setEditingApplication(null);
        }}
        onSave={handleSave}
      />

      <ApplicationDetailsModal
        application={selectedApplication}
        onClose={() => setSelectedApplication(null)}
      />

      <DeleteModal
        open={!!deleteItem}
        application={deleteItem}
        onClose={() => setDeleteItem(null)}
        onConfirm={handleDelete}
      />
    </AppShell>
  );
}