/* eslint-disable */
import type { Prisma, ClerkUserEvents } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateClerkUserEvents(options?: Omit<(UseMutationOptions<(ClerkUserEvents | undefined), DefaultError, Prisma.ClerkUserEventsCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserEventsCreateArgs, DefaultError, ClerkUserEvents, true>('ClerkUserEvents', 'POST', `${endpoint}/clerkUserEvents/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserEventsCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserEventsCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUserEvents, Prisma.ClerkUserEventsGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserEventsCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUserEvents, Prisma.ClerkUserEventsGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyClerkUserEvents(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkUserEventsCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserEventsCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkUserEvents', 'POST', `${endpoint}/clerkUserEvents/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserEventsCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserEventsCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserEventsCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyClerkUserEvents<TArgs extends Prisma.ClerkUserEventsFindManyArgs, TQueryFnData = Array<Prisma.ClerkUserEventsGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserEventsFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserEvents', `${endpoint}/clerkUserEvents/findMany`, args, options, fetch);
}

export function useInfiniteFindManyClerkUserEvents<TArgs extends Prisma.ClerkUserEventsFindManyArgs, TQueryFnData = Array<Prisma.ClerkUserEventsGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserEventsFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('ClerkUserEvents', `${endpoint}/clerkUserEvents/findMany`, args, options, fetch);
}

export function useFindUniqueClerkUserEvents<TArgs extends Prisma.ClerkUserEventsFindUniqueArgs, TQueryFnData = Prisma.ClerkUserEventsGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkUserEventsFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserEvents', `${endpoint}/clerkUserEvents/findUnique`, args, options, fetch);
}

export function useFindFirstClerkUserEvents<TArgs extends Prisma.ClerkUserEventsFindFirstArgs, TQueryFnData = Prisma.ClerkUserEventsGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserEventsFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserEvents', `${endpoint}/clerkUserEvents/findFirst`, args, options, fetch);
}

export function useUpdateClerkUserEvents(options?: Omit<(UseMutationOptions<(ClerkUserEvents | undefined), DefaultError, Prisma.ClerkUserEventsUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserEventsUpdateArgs, DefaultError, ClerkUserEvents, true>('ClerkUserEvents', 'PUT', `${endpoint}/clerkUserEvents/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserEventsUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserEventsUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUserEvents, Prisma.ClerkUserEventsGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserEventsUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUserEvents, Prisma.ClerkUserEventsGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyClerkUserEvents(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkUserEventsUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserEventsUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkUserEvents', 'PUT', `${endpoint}/clerkUserEvents/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserEventsUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserEventsUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserEventsUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertClerkUserEvents(options?: Omit<(UseMutationOptions<(ClerkUserEvents | undefined), DefaultError, Prisma.ClerkUserEventsUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserEventsUpsertArgs, DefaultError, ClerkUserEvents, true>('ClerkUserEvents', 'POST', `${endpoint}/clerkUserEvents/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserEventsUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserEventsUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUserEvents, Prisma.ClerkUserEventsGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserEventsUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUserEvents, Prisma.ClerkUserEventsGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteClerkUserEvents(options?: Omit<(UseMutationOptions<(ClerkUserEvents | undefined), DefaultError, Prisma.ClerkUserEventsDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserEventsDeleteArgs, DefaultError, ClerkUserEvents, true>('ClerkUserEvents', 'DELETE', `${endpoint}/clerkUserEvents/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserEventsDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserEventsDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, ClerkUserEvents, Prisma.ClerkUserEventsGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserEventsDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, ClerkUserEvents, Prisma.ClerkUserEventsGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyClerkUserEvents(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.ClerkUserEventsDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.ClerkUserEventsDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('ClerkUserEvents', 'DELETE', `${endpoint}/clerkUserEvents/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.ClerkUserEventsDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.ClerkUserEventsDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.ClerkUserEventsDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateClerkUserEvents<TArgs extends Prisma.ClerkUserEventsAggregateArgs, TQueryFnData = Prisma.GetClerkUserEventsAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.ClerkUserEventsAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserEvents', `${endpoint}/clerkUserEvents/aggregate`, args, options, fetch);
}

export function useGroupByClerkUserEvents<TArgs extends Prisma.ClerkUserEventsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ClerkUserEventsGroupByArgs['orderBy'] } : { orderBy?: Prisma.ClerkUserEventsGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.ClerkUserEventsGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.ClerkUserEventsGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkUserEventsGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.ClerkUserEventsGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.ClerkUserEventsGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserEvents', `${endpoint}/clerkUserEvents/groupBy`, args, options, fetch);
}

export function useCountClerkUserEvents<TArgs extends Prisma.ClerkUserEventsCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.ClerkUserEventsCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.ClerkUserEventsCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('ClerkUserEvents', `${endpoint}/clerkUserEvents/count`, args, options, fetch);
}

export function useCheckClerkUserEvents<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { eventID?: string; fromUserID?: string; primaryEmail?: string; firstName?: string; lastName?: string; imageURL?: string; banned?: boolean }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('ClerkUserEvents', `${endpoint}/clerkUserEvents/check`, args, options, fetch);
}
