export function formatMessageTime(date){
    return new Date(date).toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    })
}

// Format last seen time in Arabic
export function formatLastSeen(lastSeen) {
    if (!lastSeen) return "متصل الآن";
    
    const now = new Date();
    const lastSeenDate = new Date(lastSeen);
    const diffMs = now - lastSeenDate;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return "متصل الآن";
    if (diffMins < 60) return `آخر ظهور منذ ${diffMins} دقيقة`;
    if (diffHours < 24) return `آخر ظهور منذ ${diffHours} ساعة`;
    if (diffDays === 1) return "آخر ظهور أمس";
    if (diffDays < 7) return `آخر ظهور منذ ${diffDays} أيام`;
    
    // Format as date and time for older
    const timeStr = lastSeenDate.toLocaleTimeString("ar-SA", {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    const dateStr = lastSeenDate.toLocaleDateString("ar-SA", {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    return `آخر ظهور ${dateStr} الساعة ${timeStr}`;
}