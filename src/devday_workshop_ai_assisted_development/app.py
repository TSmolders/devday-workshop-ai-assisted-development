"""Glowtown Grid Guardian Streamlit app."""

from collections.abc import Mapping

import streamlit as st

from devday_workshop_ai_assisted_development.fixtures import INCIDENTS
from devday_workshop_ai_assisted_development.status import get_neighborhood_status

NEIGHBORHOODS: Mapping[str, str] = {
    neighborhood: get_neighborhood_status(neighborhood, INCIDENTS)
    for neighborhood in ("Lantern Row", "Copper Park", "Beacon Hill")
}


def render_app() -> None:
    """Render the current neighborhood status dashboard."""
    st.set_page_config(page_title="Grid Guardian", layout="centered")
    st.title("Grid Guardian")
    st.caption("Glowtown Night of Lights - operations dashboard")
    st.write(
        "A quick view of the fictional neighborhoods supporting tonight's festival. "
        "The incident briefing is the next capability to add."
    )

    st.subheader("Live neighborhood overview")
    for neighborhood, status in NEIGHBORHOODS.items():
        column, status_column = st.columns([3, 1])
        column.markdown(f"**{neighborhood}**")
        if status == "Stable":
            status_column.success(status)
        else:
            status_column.warning(status)

    st.divider()
    st.subheader("Workshop task")
    st.info(
        "Build a briefing for one neighborhood: show its current status and identify "
        "the single active incident that needs attention most."
    )
    st.caption("Start with the local Grid Guardian issue and shape the behavior before coding.")


if __name__ == "__main__":
    render_app()
