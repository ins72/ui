"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Tabs from "@/components/Tabs";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Notification from "./Notification";
import Filter from "./Filter";
import { dataService } from "@/lib/data-service";

interface NotificationData {
  id: number;
  type: string;
  login: string;
  action: string;
  product: string;
  content: string;
  avatar: string;
  time: string;
  new: boolean;
}

const categories = [
    { id: 1, name: "Recent" },
    { id: 2, name: "Earlier" },
];

const NotificationsPage = ({}) => {
  const [allNotifications, setAllNotifications] = useState<NotificationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState(categories[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await dataService.getNotifications();
        if (response.notifications) {
          setAllNotifications(response.notifications);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
      <>
          <Layout title="Notifications">
              <div className="flex items-start">
                  <div className="col-left card mb-0 pb-8">
                      <div className="flex mb-6">
                          <Tabs
                              items={categories}
                              value={category}
                              setValue={setCategory}
                          />
                          <Button className="ml-auto max-md:!hidden" isBlack>
                              Mark all as read
                          </Button>
                          <Button
                              className="!hidden ml-3 max-lg:!flex max-md:ml-auto"
                              icon="filters"
                              isCircle
                              isStroke
                              onClick={() => setIsOpen(true)}
                          />
                      </div>
                      <div className="">
                          {allNotifications.map((notification) => (
                              <Notification
                                  value={notification}
                                  key={notification.id}
                              />
                          ))}
                      </div>
                  </div>
                  <div className="col-right card sticky top-22 px-6 pb-6 max-lg:hidden">
                      <Filter />
                  </div>
              </div>
          </Layout>
          <Modal
              classWrapper=""
              open={isOpen}
              onClose={() => setIsOpen(false)}
          >
              <Filter />
          </Modal>
      </>
  );
};

export default NotificationsPage;
