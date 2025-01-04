import { FC } from "react";
import { Button } from "../";
import { useNavigate } from "react-router-dom";
import { EmptyState } from "../../ui/empty-state";

interface GenericEmptyStateParamType {
  title?: string;
  button?: boolean;
  buttonPath?: string;
  description?: string;
  buttonContent?: string;
}

const GenericEmptyState: FC<GenericEmptyStateParamType> = ({
  title,
  button,
  buttonPath,
  description,
  buttonContent,
}) => {
  const navigate = useNavigate();
  return (
    <EmptyState
      description={description || ""}
      title={title || "No data available"}
      icon={<i className="fa-solid fa-file text-light"></i>}
      className={`flex items-center justify-center h-section-h min-h-section-h`}
    >
      {button && (
        <Button onClick={() => navigate(buttonPath || "/")}>
          {buttonContent || ""}
        </Button>
      )}
    </EmptyState>
  );
};

export default GenericEmptyState;
