// import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
// import { fetchNoteById } from "@/lib/api";
// import NoteDetailsClient from "./NoteDetails.client";

// export default async function NoteDetailsPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;
//   const numericId = Number(id);
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["note", numericId],
//     queryFn: () => fetchNoteById(numericId),
//   });

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <NoteDetailsClient id = {numericId} />
//     </HydrationBoundary>
//   );
// }


import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import NoteDetailsClient from "./NoteDetails.client";

export default async function NoteDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // розпаковуємо params
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient id={id} />
    </HydrationBoundary>
  );
}
