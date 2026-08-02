import React, { useState } from "react";
import {
  FiFileText,
  FiZoomIn,
  FiZoomOut,
  FiRotateCcw,
  FiExternalLink,
  FiDownload,
  FiX,
  FiAlertCircle,
  FiLoader,
} from "react-icons/fi";

const PdfViewerModal = ({ title, pdfUrl, onClose, downloadSize }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(100);

  const embedUrl = pdfUrl
    ? `https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true`
    : "";

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 25, 200));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 25, 50));
  const handleResetZoom = () => setZoomLevel(100);

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{
        backgroundColor: "rgba(15, 23, 42, 0.75)",
        backdropFilter: "blur(8px)",
        zIndex: 1060,
      }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-xl h-90 my-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ height: "90vh", maxWidth: "95vw" }}
      >
        <div className="modal-content rounded-4 shadow-lg border-0 h-100 d-flex flex-column bg-body overflow-hidden">
          {/* Header */}
          <div className="modal-header border-bottom px-4 py-3 bg-body-tertiary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <div className="p-2 bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center">
                <FiFileText size={22} />
              </div>
              <div>
                <h5 className="modal-title fw-bold m-0 text-body fs-5">{title}</h5>
                <span className="badge bg-secondary-subtle text-secondary small mt-1">
                  PDF Resource {downloadSize ? `• ${downloadSize}` : ""}
                </span>
              </div>
            </div>

            {/* Toolbar Actions */}
            <div className="d-flex align-items-center gap-2">
              <div className="btn-group btn-group-sm bg-body border rounded-3 p-1 d-none d-md-flex align-items-center me-2">
                <button
                  className="btn btn-sm btn-ghost border-0 text-secondary"
                  onClick={handleZoomOut}
                  title="Zoom Out"
                >
                  <FiZoomOut size={16} />
                </button>
                <span className="px-2 text-muted small fw-mono">{zoomLevel}%</span>
                <button
                  className="btn btn-sm btn-ghost border-0 text-secondary"
                  onClick={handleZoomIn}
                  title="Zoom In"
                >
                  <FiZoomIn size={16} />
                </button>
                <button
                  className="btn btn-sm btn-ghost border-0 text-muted"
                  onClick={handleResetZoom}
                  title="Reset Zoom"
                >
                  <FiRotateCcw size={14} />
                </button>
              </div>

              {pdfUrl && (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary btn-sm rounded-3 d-flex align-items-center gap-2"
                  title="Open Original"
                >
                  <FiExternalLink size={14} />
                  <span className="d-none d-sm-inline">Open Original</span>
                </a>
              )}

              {pdfUrl && (
                <a
                  href={pdfUrl}
                  download
                  className="btn btn-primary btn-sm rounded-3 fw-semibold d-flex align-items-center gap-2 shadow-sm"
                  title="Download File"
                >
                  <FiDownload size={14} />
                  <span className="d-none d-sm-inline">Download PDF</span>
                </a>
              )}

              <button
                type="button"
                className="btn btn-light btn-sm rounded-3 ms-2 p-2"
                onClick={onClose}
                aria-label="Close"
              >
                <FiX size={18} />
              </button>
            </div>
          </div>

          {/* Modal Body / Viewer */}
          <div className="modal-body p-0 position-relative flex-grow-1 bg-secondary-subtle overflow-hidden d-flex justify-content-center align-items-center">
            {isLoading && (
              <div className="position-absolute top-50 start-50 translate-middle text-center z-1 bg-body p-4 rounded-4 shadow-sm border">
                <FiLoader size={28} className="spinner-border text-primary border-0 mb-3" />
                <p className="m-0 fw-semibold text-body">Loading PDF Reader...</p>
                <p className="text-muted small m-0 mt-1">Fetching online educational document</p>
              </div>
            )}

            {pdfUrl ? (
              <div
                className="w-100 h-100 overflow-auto d-flex justify-content-center align-items-center"
                style={{
                  transform: `scale(${zoomLevel / 100})`,
                  transformOrigin: "center top",
                  transition: "transform 0.2s ease-in-out",
                }}
              >
                <iframe
                  src={embedUrl}
                  title={title}
                  className="w-100 h-100 border-0"
                  onLoad={() => setIsLoading(false)}
                  onError={() => setIsLoading(false)}
                />
              </div>
            ) : (
              <div className="text-center py-5">
                <FiAlertCircle size={40} className="text-warning mb-3" />
                <h5>PDF Resource Unavailable</h5>
                <p className="text-muted">The online link for this document could not be resolved.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfViewerModal;
