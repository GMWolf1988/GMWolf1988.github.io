import { ProjectStatus } from "../content/config";

export function statusToBadgeClass(status: string) {
    switch (status) {
        case ProjectStatus.Complete: return 'bg-green-500/20 text-green-300';
        case ProjectStatus.Active: return 'bg-orange-500/20 text-orange-300';
        case ProjectStatus.Archived: return 'bg-blue-500/20 text-blue-300';
    }
}
