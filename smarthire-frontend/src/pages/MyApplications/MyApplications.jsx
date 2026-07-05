import { useEffect, useState } from "react";

import AppShell from "../../layouts/AppShell";

import MyApplicationsHeader from "../../components/myApplications/MyApplicationsHeader";
import MyApplicationsFilters from "../../components/myApplications/MyApplicationsFilters";
import MyApplicationsTable from "../../components/myApplications/myApplicationsTable";

import DeleteModal from "../../components/modals/DeleteModal";

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
      const matchesSearch =
        item.company.toLowerCase().includes(search.toLowerCase()) ||
        item.role.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sort === "Newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }

      return new Date(a.createdAt) - new Date(b.createdAt);
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
        onEdit={(item) => {
            setEditingApplication(item);
            setShowModal(true);
        }}
        onDelete={(item) => setDeleteItem(item)}
        />

      <DeleteModal
        open={!!deleteItem}
        title={deleteItem?.company}
        onCancel={() => setDeleteItem(null)}
        onConfirm={handleDelete}
      />
    </AppShell>
  );
}