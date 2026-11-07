import time
from collections import defaultdict, deque
from typing import Dict, Tuple

class SlidingWindowRateLimiter:
    """
    In-process sliding window rate limiter per IP/Client per Agent.
    Enforces 'max_requests_per_hour' limits defined in agent_registry.py.
    """
    def __init__(self):
        # Key: (client_ip, agent_id) -> Deque of timestamps
        self._requests: Dict[Tuple[str, str], deque] = defaultdict(deque)

    def is_allowed(self, client_ip: str, agent_id: str, max_limit: int, window_seconds: int = 3600) -> Tuple[bool, int]:
        now = time.time()
        key = (client_ip, agent_id)
        timestamps = self._requests[key]

        # Remove timestamps older than window (1 hour = 3600s)
        while timestamps and timestamps[0] < now - window_seconds:
            timestamps.popleft()

        # Check count
        if len(timestamps) >= max_limit:
            retry_after = int(window_seconds - (now - timestamps[0]))
            return False, max(retry_after, 1)

        # Record new request timestamp
        timestamps.append(now)
        return True, 0

# Global Rate Limiter Instance
limiter = SlidingWindowRateLimiter()