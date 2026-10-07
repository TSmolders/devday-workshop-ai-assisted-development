"""Current neighborhood status derived from incident fixtures."""

from collections.abc import Iterable

from devday_workshop_ai_assisted_development.fixtures import Incident


def get_neighborhood_status(neighborhood: str, incidents: Iterable[Incident]) -> str:
    """Return whether a neighborhood needs attention based on active incidents."""
    if any(
        incident.neighborhood == neighborhood and incident.status == "active"
        for incident in incidents
    ):
        return "Attention needed"
    return "Stable"
