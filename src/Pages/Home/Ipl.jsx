import React from "react";
import "./HomeSections.css";

const Ipl = () => {
  return (
    <div className="iplSection">
      <div className="sectionLabel"> 
        IPL 2022
      </div>

      <div className="iplContent">
        <div className="iplLeftPane">
          <div className="iplTabs">
            <div className="iplTabActive">
              NEWS
            </div>
            <div className="iplTab">
              PHOTOS
            </div>
          </div>
          <hr className="iplHr" />
          <div className="iplLeadRow">
            <div className="iplLeadCard">
              <div>
                <img className="iplLeadImage" src="https://c.ndtvimg.com/2022-03/4b24gmpo_sunil-gavaskar_625x300_08_March_22.jpg?downsize=335:207" alt="" />
              </div>
              <div className="iplLeadText">
                "Won't Be The Same": Gavaskar On Hardik vs MI Compared To Warner
                vs SRH
              </div>
            </div>
            <div className="iplStoryList">
              <div className="iplStoryRow">
                <div>
                  <img className="iplThumb" src="https://c.ndtvimg.com/2022-04/uoir62c_virat-kohli-bcciipl_625x300_27_April_22.jpg?downsize=75:57" alt="" />
                </div>
                <div className="iplStoryTextWrap">
                  <div className="iplStoryText">
                    "All About Intent": Daniel Vettori On Virat Kohli's 30-Run
                    Knock vs CSK
                  </div>
                </div>
              </div>
              <hr className="iplStoryDivider" />

              <div className="iplStoryRow">
                <div>
                  <img className="iplThumb" src="https://c.ndtvimg.com/2022-05/kcrj5pt_david-warner_625x300_05_May_22.jpg?downsize=75:57" alt="" />
                </div>
                <div className="iplStoryTextWrap">
                  <div className="iplStoryText">
                    IPL 2022: Here's What Pant Said About Warner's 92-Run Knock
                    Against SRH
                  </div>
                </div>
              </div>

              <hr className="iplStoryDivider" />

              <div className="iplStoryRow">
                <div>
                  <img className="iplThumb" src="https://c.ndtvimg.com/2022-05/8mkqsve_delhi-capitals-bcciipl_625x300_06_May_22.jpg?im=FaceCrop,algorithm=dnn,width=75,height=57" alt="" />
                </div>
                <div className="iplStoryTextWrap">
                  <div className="iplStoryText">
                    IPL 2022 Points Table Update, Latest Orange Cap, Purple Cap
                    Lists
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="iplDivider"></div>
        <div className="iplRightPane">
          <div className="iplTabsRow">
            <div className="iplTabActive">
              SCORES
            </div>
            <div className="iplTab">
              SCHEDULE
            </div>
            <div className="iplTab">
              POINTS TABLE
            </div>
            <div className="iplTab">
              RESULTS
            </div>
          </div>
          <hr className="iplHr" />
          <div className="iplEmptyState">No Matches In Progress</div>
        </div>
      </div>
    </div>
  );
};

export default Ipl;
