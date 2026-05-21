import React, { useEffect, useState } from "react";
import "./HomeSections.css";

const Koo = () => {
  return (
    <div className="kooWidget">
      <div className="kooHeader">
        <div className="kooTitle">
          TRENDING ON KOO
        </div>
        <div className="kooAvatarWrap">
          <img className="kooAvatar" src="https://img.jagranjosh.com/images/2021/May/2752021/Koo-app-raises-$30-million-funding-led-by-Tiger-Global-amid-Twitter-ban-row.jpg" alt="" />
        </div>
      </div>
      <div className="kooFeedList">
        <div className="kooFeedItem">
          <div className="kooFeedImageWrap">
            <img className="kooFeedImage" src="https://images.kooapp.com/transcode_input/5517220/f887fc85-4e3d-43ef-8347-4e15eac23faavoke.jpg?tr=n-dp_small" alt="" />
          </div>
          <div className="kooFeedContent">
            <div className="kooFeedMetaRow">
              <div className="kooUser">
                @mohfw_india
              </div>
              <div className="kooTime">
                5m
              </div>
            </div>

            <p className="kooText">
              #EndTheStigma #TB can happen to anyone! The love and support
              received from the family and the society will help to over...
            </p>
          </div>
        </div>
        <hr className="kooDivider" />

        <div className="kooFeedItem">
          <div className="kooFeedImageWrap">
            <img className="kooFeedImage" src="https://images.kooapp.com/transcode_input/d470ee16-68b9-4578-9ee8-dab96f1ef646voke.jpg?tr=n-dp_small" alt="" />
          </div>
          <div className="kooFeedContent">
            <div className="kooFeedMetaRow">
              <div className="kooUser">
                @PIB_India
              </div>
              <div className="kooTime">
                10m
              </div>
            </div>

            <p className="kooText">
              Union Minister Raj Kumar Singh reviewed the status of import of
              coal for blending in the thermal power plants with the s...
            </p>
          </div>
        </div>
        <hr className="kooDivider" />

        <div className="kooFeedItem">
          <div className="kooFeedImageWrap">
            <img className="kooFeedImage" src="https://images.kooapp.com/transcode_input/9140193/profile1633069026694spc2vl.png?tr=n-dp_small" alt="" />
          </div>
          <div className="kooFeedContent">
            <div className="kooFeedMetaRow">
              <div className="kooUser">
                @AmritMahotsav
              </div>
              <div className="kooTime">
                40m
              </div>
            </div>

            <p className="kooText">
              Everyone's favorite podcast is here 'cause we've got the riveting
              stories on the go. Where are you? Tune in to 'Zara Ya...
            </p>
          </div>
        </div>
        <hr className="kooDivider" />

        <div className="kooFeedItem">
          <div className="kooFeedImageWrap">
            <img className="kooFeedImage" src="https://images.kooapp.com/transcode_input/4231d077-e110-4367-96da-c3fa30453bd5voke.jpg?tr=n-dp_small" alt="" />
          </div>
          <div className="kooFeedContent">
            <div className="kooFeedMetaRow">
              <div className="kooUser">
                @himantabiswa
              </div>
              <div className="kooTime">
                2h
              </div>
            </div>

            <p className="kooText">
              The progenitor of Advaita Vedānta, Adi Guru Shankaracharya ji
              infused new life into the ancient school of Hindu darśanam...
            </p>
          </div>
        </div>
        <hr className="kooDivider" />

        <div className="kooFeedItem">
          <div className="kooFeedImageWrap">
            <img className="kooFeedImage" src="https://images.kooapp.com/transcode_input/2630278/f56235de-75c9-4f72-9335-c2af0a3ae745voke.jpg?tr=n-dp_small" alt="" />
          </div>
          <div className="kooFeedContent">
            <div className="kooFeedMetaRow">
              <div className="kooUser">
                @chouhanshivraj
              </div>
              <div className="kooTime">
                3h
              </div>
            </div>

            <p className="kooText">
              #Thoughtoftheday #FridayThoughts #FridayMotivation
              #GauranshiSharma #MadhyaPradesh
            </p>
          </div>
        </div>
        <hr className="kooDivider" />

        <div className="kooFeedItem">
          <div className="kooFeedImageWrap">
            <img className="kooFeedImage" src="https://images.kooapp.com/transcode_input/img62.2021/2/10/img62_1612926431?tr=n-dp_small" alt="" />
          </div>
          <div className="kooFeedContent">
            <div className="kooFeedMetaRow">
              <div className="kooUser">
                @RailMinIndia
              </div>
              <div className="kooTime">
                3h
              </div>
            </div>

            <p className="kooText">
              NMG Rake : Faster, Safer & Reliable Bulk Carrier Railways offers
              swift transportation of automobiles through NMG (New M...
            </p>
          </div>
        </div>
        <hr className="kooDivider" />

        <div className="kooFeedItem">
          <div className="kooFeedImageWrap">
            <img className="kooFeedImage" src="https://images.kooapp.com/transcode_input/a4b0efa5-e90d-45a2-bcf4-baae08d41a58voke.jpg?tr=n-dp_small" alt="" />
          </div>
          <div className="kooFeedContent">
            <div className="kooFeedMetaRow">
              <div className="kooUser">
                @kiren.rijiju
              </div>
              <div className="kooTime">
                3h
              </div>
            </div>

            <p className="kooText">
              Attended public grievances during Sahyog Programme at BJP India
              Headquarter in New Delhi. #BJPSahyog
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Koo;
