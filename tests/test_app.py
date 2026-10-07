from devday_workshop_ai_assisted_development.app import NEIGHBORHOODS


def test_known_neighborhoods_have_statuses() -> None:
    assert NEIGHBORHOODS == {
        "Lantern Row": "Attention needed",
        "Copper Park": "Attention needed",
        "Beacon Hill": "Stable",
    }
