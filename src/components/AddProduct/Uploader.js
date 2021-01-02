import React from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import S3FileUpload from "react-s3";
import { ACCESS_KEY_ID, ACCESS_KEY_SECRET } from "../../config";

const { Dragger } = Upload;
const config = {
  bucketName: "",
  region: "",
  accessKeyId: "",
  secretAccessKey: "",
};

const props = {
  name: "file",
  multiple: false,
  // action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    S3FileUpload.deleteFile(info.file.name, config)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
    console.log(info);
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Uploader = () => {
  console.log(ACCESS_KEY_ID, ACCESS_KEY_SECRET);
  // const [file, setFiles] = React.useState([]);
  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
    </Dragger>
  );
};

export default Uploader;
