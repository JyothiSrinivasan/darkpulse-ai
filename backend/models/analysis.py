import uuid
import json
from datetime import datetime
from sqlalchemy import Column, String, DateTime, Text, Boolean
from backend.database import Base

class AnalysisRecord(Base):
    __tablename__ = "analyses"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    agent_id = Column(String, index=True, nullable=False)
    mode = Column(String, nullable=False)
    input_type = Column(String, nullable=False)
    content_summary = Column(String, nullable=False)
    result_json = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "agent_id": self.agent_id,
            "mode": self.mode,
            "input_type": self.input_type,
            "content_summary": self.content_summary,
            "result": json.loads(self.result_json),
            "created_at": self.created_at.isoformat() + "Z"
        }