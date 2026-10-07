from datetime import datetime

from devday_workshop_ai_assisted_development.fixtures import Incident
from devday_workshop_ai_assisted_development.status import get_neighborhood_status


def test_active_incident_means_neighborhood_needs_attention() -> None:
    incidents = [
        Incident(
            neighborhood="Lantern Row",
            status="active",
            severity="low",
            occurred_at=datetime(2026, 10, 4, 18, 0),
            summary="A fictional incident.",
            incident_id="internal-id",
            internal_note="internal metadata",
        )
    ]

    assert get_neighborhood_status("Lantern Row", incidents) == "Attention needed"


def test_neighborhood_without_active_incidents_is_stable() -> None:
    incidents = [
        Incident(
            neighborhood="Beacon Hill",
            status="resolved",
            severity="low",
            occurred_at=datetime(2026, 10, 4, 18, 0),
            summary="A resolved fictional incident.",
            incident_id="internal-id",
            internal_note="internal metadata",
        )
    ]

    assert get_neighborhood_status("Beacon Hill", incidents) == "Stable"
