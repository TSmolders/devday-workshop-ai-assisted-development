"""Fictional Glowtown incident fixtures for the workshop task."""

from dataclasses import dataclass
from datetime import datetime
from typing import Literal

Severity = Literal["low", "medium", "high", "critical"]


@dataclass(frozen=True)
class Incident:
    """An incident available to the future briefing feature."""

    neighborhood: str
    status: Literal["active", "resolved"]
    severity: Severity
    occurred_at: datetime
    summary: str
    incident_id: str
    internal_note: str


INCIDENTS = [
    Incident(
        neighborhood="Lantern Row",
        status="active",
        severity="high",
        occurred_at=datetime(2026, 10, 4, 18, 30),
        summary="Street lighting is unavailable near the festival entrance.",
        incident_id="GT-001",
        internal_note="Fixture only: do not expose this identifier.",
    ),
    Incident(
        neighborhood="Lantern Row",
        status="active",
        severity="high",
        occurred_at=datetime(2026, 10, 4, 18, 45),
        summary="A temporary outage affects the east promenade.",
        incident_id="GT-002",
        internal_note="Fixture only: do not expose this identifier.",
    ),
    Incident(
        neighborhood="Copper Park",
        status="active",
        severity="medium",
        occurred_at=datetime(2026, 10, 4, 17, 15),
        summary="A footpath light is flickering near the park stage.",
        incident_id="GT-003",
        internal_note="Fixture only: do not expose this identifier.",
    ),
    Incident(
        neighborhood="Beacon Hill",
        status="resolved",
        severity="low",
        occurred_at=datetime(2026, 10, 4, 16, 45),
        summary="A brief lantern outage was resolved.",
        incident_id="GT-004",
        internal_note="Fixture only: do not expose this identifier.",
    ),
]
