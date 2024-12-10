import React, { useEffect } from "react";
import Analystics from "./components/Analystics/Analystics";
import Leads from "./components/Leads/Leads";
import Tabs from "../../../../components/Tabs";
import Shadule from "./components/Shedule/Shadule";
import Options from "./components/Options/Options";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  compaignAnalytics,
  pauseCompaignRec,
  resumeCompaignRec,
} from "../../../../redux/services/smsCampaign";
import Button from "../../../../components/Button";
import { CiPause1 } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";

const CompaignContent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { token, user_id } = useSelector((state) => state.auth);
  const { analytics, campaign } = useSelector((state) => state.smsCampaign);
  console.log("🚀 ~ CompaignContent ~ compaignAnalytics:", analytics, campaign);
  const tabsData = [
    {
      id: "analystics",
      label: "Analystics",
      content: <Analystics data={analytics} />,
    },
    {
      id: "leads",
      label: "Leads",
      content: <Leads />,
    },

    {
      id: "schedule",
      label: "Schedule",
      content: <Shadule />,
    },
    {
      id: "trigger",
      label: "Trigger Compaign",
      content: <Options />,
    },
  ];
  const pauseCompaign = () => {
    const params = {
      compaign_id: id,
      user_id: user_id,
    };
    dispatch(pauseCompaignRec(token, params));
  };
  const resumeCompaign = () => {
    const params = {
      compaign_id: id,
      user_id: user_id,
    };
    dispatch(resumeCompaignRec(token, params));
  };
  useEffect(() => {
    dispatch(compaignAnalytics(token, id));
  }, [token, id, dispatch]);
  return (
    <div>
      <div className="float-end px-8">
        {campaign?.status === "paused" ? (
          <Button
            className="flex gap-2 py-3 bg-green-500 hover:bg-green-600"
            onClick={resumeCompaign}
          >
            <span className="mt-1">
              <CiPlay1 />
            </span>
            <span>Resume Compaign</span>
          </Button>
        ) : (
          campaign?.status === "active" && (
            <Button
              className="flex gap-2 py-3 bg-black hover:bg-gray-800"
              onClick={pauseCompaign}
            >
              <span className="mt-1">
                <CiPause1 />
              </span>
              <span>Pause Compaign</span>
            </Button>
          )
        )}
      </div>
      <Tabs tabsData={tabsData} />
    </div>
  );
};

export default CompaignContent;
