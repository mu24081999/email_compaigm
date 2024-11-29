import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Table from "../../../../components/Table";
import Button from "../../../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEmailAccountsApi } from "../../../../redux/services/email";
import Modal from "../../../../components/Modal";
import ModalBody from "./ModalBody/ModalBody";
import Layout from "../../../../layout/Layout";
const EmailAccounts = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const { token, user_id } = useSelector((state) => state.auth);
  const { emails } = useSelector((state) => state.email);
  console.log("🚀 ~ EmailAccounts ~ emails:", emails);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(false);
  const [accountsData, setAccountsData] = useState([]);
  const handleSelectedEmail = () => {};
  const [pagination, setPagination] = useState({});

  const columns = [
    {
      label: "Email",
      accessor: "email",
    },
    { label: "Emails Sent", accessor: "emails_sent" },
    { label: "Warmup Emails", accessor: "warmups_sent" }, // Example of nested accessor
    {
      label: "Actions",
      accessor: "actions",
      type: "actions",
      variant: "green",
    },
  ];

  const data = [
    {
      email: "mu24081999@gmail.com",
      emails_sent: 30,
      warmup_emails: 10,
      health_score: "100%",
    },
    {
      email: "mu24081999@gmail.com",
      emails_sent: 30,
      warmup_emails: 10,
      health_score: "100%",
    },
  ];
  const handleChildData = (selectedEmail) => {
    console.log("🚀 ~ handleChildData ~ selectedEmail:", selectedEmail);
    setSelectedEmail(selectedEmail);
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    setPagination(emails?.pagination);
  }, [emails]);
  useEffect(() => {
    const query = `user_id=${user_id}`;
    dispatch(getEmailAccountsApi(token, query));
  }, [token, dispatch, user_id]);
  const fetchData = (page) => {
    const query = `user_id=${user_id}&&page=${page}`;
    dispatch(getEmailAccountsApi(token, query));
  };
  useEffect(() => {
    const data = [];
    Array?.isArray(emails?.accountsData) &&
      emails?.accountsData?.map((account) => {
        data.push({
          ...account,
          actions: [
            {
              color: "green",
              label: "Warmup Account",
              onClick: () => handleChildData(account),
            },
          ],
        });
      });
    setAccountsData(data);
    return () => {};
  }, [emails]);
  return (
    <Layout
      component={
        <div>
          <div className="flex justify-between">
            <Button
              onClick={() => navigateTo("/connect-email-account")}
              size="lg"
              className="py-1 flex"
            >
              Add Email Account
            </Button>
          </div>
          <div className="pt-10">
            <Table
              columns={columns}
              data={accountsData}
              dataFromChild={handleChildData}
              totalItems={pagination?.totalItems}
              itemsPerPage={10}
              onPageChange={(page) => fetchData(page)}
            />
          </div>
          <div className="">
            {/* Modal Component */}
            <Modal
              isOpen={isOpen}
              onClose={handleClose}
              title="Warm-Up "
              body=<ModalBody selectedEmail={selectedEmail} />
              // onSave={handleSave}
              saveButtonText="Save Changes"
              closeButtonText="Dismiss"
              size="md"
            />
          </div>
        </div>
      }
    />
  );
};

export default EmailAccounts;
