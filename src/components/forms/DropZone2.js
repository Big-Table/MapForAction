import React, { useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "black",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const thumbsContainer = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: "auto",
  height: 200,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const button = {
  backgroundColor: "#FCC42C",
  color: "#000000",
  borderStyle: "solid",
  borderColor: "black",
  borderWidth: 2,
  height: 40,
  width: 150,
  borderRadius: 20,
  fontFamily: "Work Sans",
  fontWeight: 700,
  cursor: "pointer",
  outline: "none",
  display: "flex",
  justifyContent: "center",
  paddingTop: 2,
};

function StyledDropzone(props) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    props.handleImageUpload(files[0]);
  }, [files, props]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    open,
  } = useDropzone({
    maxFiles: 1,
    multiple: false,
    accept: "image/*",
    noClick: true,
    noKeyboard: true,
    onChange: (event) => {
      props.handleImageDrop(event);
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragAccept, isDragReject]
  );

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={{ display: "flex", justifyContent: "center", thumbInner }}>
        <img src={file.preview} style={img} alt="thumbnail" />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const filepath = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  // console.log(files);
  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag and Drop a picture here!</p>
        <button style={button} type="button" onClick={open}>
          Choose a Photo
        </button>
      </div>
      <aside>
        <h4>File Name</h4>
        <p>{filepath}</p>
      </aside>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </div>
  );
}

export default StyledDropzone;
